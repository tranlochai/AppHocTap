import React from 'react';
import { View, FlatList } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';
import Slider from '../Components/Home/Slider';
import VideoCourse from '../Components/Home/VideoCourse';
import DetailsCourse from '../Pages/DetailsCourse';

const Home = () => {
    const navigation = useNavigation();


    const handlePressImage = (video) => {
        navigation.navigate('DetailsCourse', { video });
    };

    return(
        <FlatList 
            ListHeaderComponent={ 
                    <View style={{padding:20, marginTop:25}}>
                        <Header/>
                        <SearchBar setSearchText={(value)=>console.log(value)}/>
                        <Slider/>
                    </View>
            }
            data={[null]} 
            renderItem={() => ( 
                <VideoCourse onPressImage={handlePressImage} />
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

Home.navigationOptions = {
  headerTitle: null,
};

export default Home;
