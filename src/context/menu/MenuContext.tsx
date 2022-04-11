import React, { createContext, useEffect, useState } from 'react';
import http from '../../api/http';
import { Food } from '../../interfaces';
import { MenuResp } from '../../interfaces/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

type MenuContextProps = {
    menu: Food[];
    type: string;
    getMenu: () => Promise<void>;
    changeType: (type: string) => void;
}

export const MenuContext = createContext({} as MenuContextProps);

export const MenuProvider = ({ children }: any) => {

    const [type, setType] = useState('pizza')
    const [menu, setMenu] = useState<Food[]>([]);

    useEffect(() => {
        getMenu();
    }, [type])

    const getMenu = async () => {
        const token = await AsyncStorage.getItem('Authorization') || ''

        const resp = await http.get<MenuResp>(`/api/menu?limit=99&type=${type}`, {
            headers: {
                Authorization: token
            }
        })
        setMenu([...resp.data.menu]);
    }

    const changeType = (type: string) => {
        setType(type)
    }

    return (
        <MenuContext.Provider value={{
            menu,
            type,
            getMenu,
            changeType
        }}>
            {children}
        </MenuContext.Provider>
    )
}