import { gql } from "@apollo/client";
export const GET_ALL_FOODS = gql`
  query getAllFoods {
    getAllFoods {
      id
      name
      description
      price
      stock
      imageUrl
      createdAt
    }
  }
`;
export const CREATE_FOOD = gql`
  mutation CreateFood($input: createFoodInput!) {
    createFood(input: $input) {
      id
      name
    }
  }
`;
export const UPDATE_FOOD = gql`
  mutation UpdateFood($update: updateFoodInput!) {
    updateFoods(update: $update) {
      id
      name
    }
  }
`;
export const DELETE_FOOD = gql`
  mutation DeleteFood($id: String!) {
    deleteFood(id: $id) 
  }
`;  