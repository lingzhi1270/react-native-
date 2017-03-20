import {AsyncStorage} from 'react-native'

class Storage{

getItem(key){
    return AsyncStorage.getItem(key).then((value) => {
    return JSON.parse(value);
        })
    }

setItem(key,value){
    return AsyncStorage.setItem(key,JSON.stringify(value));
}

removeItem(key){
    return AsyncStorage.removeItem(key);
}

getAllKeys(){
    return AsyncStorage.getAllKeys();
}

clear(){
    return AsyncStorage.clear();
}

multiRemove(keys){
    return AsyncStorage.multiRemove(keys);
}


}

export default Storage
