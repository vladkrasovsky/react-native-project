import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';
import PostsScreen from './screens/posts/PostsScreen';
import CreatePostsScreen from './screens/posts/CreatePostsScreen';
import ProfileScreen from './screens/ProfileScreen';

import { Feather } from '@expo/vector-icons';
import LogoutBtn from './components/common/LogoutBtn';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Register"
        component={RegistrationScreen}
      />
    </AuthStack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 83,
          backgroundColor: '#fff',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#212121',
        tabBarInactiveTintColor: '#212121',
        headerStyle: { backgroundColor: '#fff' },
        headerTitleAlign: 'center',
        // headerShadowVisible: false,
      }}
    >
      <MainTab.Screen
        options={{
          headerRight: () => <LogoutBtn />,
          tabBarIcon: ({ focused, color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          headerTitle: 'Create Post',
          tabBarIcon: ({ focused, color }) => (
            <>
              {!focused && (
                <View
                  style={{
                    width: 70,
                    height: 40,
                    backgroundColor: '#FF6C00',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Feather name="plus" size={24} color="#fff" />
                </View>
              )}

              {focused && (
                <View
                  style={{
                    width: 70,
                    height: 40,
                    backgroundColor: '#F6F6F6',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Feather name="trash-2" size={24} color="#BDBDBD" />
                </View>
              )}
            </>
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          headerRight: () => <LogoutBtn />,
          tabBarIcon: ({ focused, color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export const useRoute = isAuth => {
  if (!isAuth) {
    return <AuthNavigation />;
  }
  return <MainNavigation />;
};
