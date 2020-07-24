﻿import { intentEsporte } from '../services/esporte.service'


export function call(intent){

    switch(intent){
        case 'Esporte':{
            return intentEsporte()
        } 
    }
}