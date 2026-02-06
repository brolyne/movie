import {create} from 'Zustand';

const useStore = create((set)=>{
    return {

        movie:'',
        setmovie:(item)=>{set({movie:item})},

        movies: '',
        setMovies: (list)=>{set({movies:list})},

    }
})
export default useStore;