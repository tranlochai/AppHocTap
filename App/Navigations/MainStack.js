import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';
import DetailsCourse from '../Pages/DetailsCourse';
import PlayVideo from '../Pages/PlayVideo';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailsCourse"
        component={DetailsCourse}
        options={{ title: 'Chi tiết khoá học' }} 
      />
      <Stack.Screen 
        name="PlayVideo" 
        component={PlayVideo} 
        options={{ title: 'Video bài học' }}    
        />
    </Stack.Navigator>
  );
}
