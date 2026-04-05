import { useQuery, useMutation } from "@apollo/client/react";
import { GET_ALL_FOODS, CREATE_FOOD, UPDATE_FOOD, DELETE_FOOD } from "../graphql/food.gql";
import type { FoodsData } from "@/types/interface.foods";

export const useFoods = () => {
  const { data, loading, refetch } = useQuery<FoodsData>(GET_ALL_FOODS);

  const [createFood] = useMutation(CREATE_FOOD, { refetchQueries: [{ query: GET_ALL_FOODS }] });
  const [updateFood] = useMutation(UPDATE_FOOD, { refetchQueries: [{ query: GET_ALL_FOODS }] });
  const [deleteFood] = useMutation(DELETE_FOOD, { refetchQueries: [{ query: GET_ALL_FOODS }] });

  const handleDelete = async (id: string) => {
    if (confirm("Serius mau hapus? 🥺")) {
      await deleteFood({ variables: { id } }).catch(console.error);
    }
  };

  return {
    foods: data?.getAllFoods ?? [],
    loading,
    createFood, 
    updateFood,
    handleDelete,
    refresh: refetch
  };
};