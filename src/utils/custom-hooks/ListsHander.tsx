import { useState, useCallback } from 'react'
import { IItem, IOthersLists } from '../../models'

const useListsHandler = () => {
    const [personalList, setPersonalList] = useState<IItem[]>([])
    const [othersLists, setOthersLists] = useState<IOthersLists>({})

    const updatePersonalList = useCallback((list: IItem[]) => {
        setPersonalList(list)
    }, [])

    const updateOthersLists = useCallback((lists: IOthersLists) => {
        setOthersLists(lists)
    }, [])

    return {
        personalList,
        othersLists,
        updatePersonalList,
        updateOthersLists
    }
}

export default useListsHandler