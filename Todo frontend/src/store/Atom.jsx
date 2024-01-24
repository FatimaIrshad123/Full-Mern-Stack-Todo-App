import axios from "axios";
import { atom, selector } from "recoil";


export const todoAtomFamily = atom({
    key : 'todoAtomFamily',
    default : selector({
        key : 'todoAtomSelector',
        get : async() => {
            await new Promise(r => setTimeout(r,5000))
            const res = await axios.get('http://localhost:3000/todo')
            return res.data
        }
    })
})

export const filterSelector = selector({
    key : 'filterSelector',
    get : ({get}) => {
        const filtered = get(todoAtomFamily)
         return filtered.filter(x => x.title.includes('abc'))
    }
})