import useSWR from "swr"
import { fetchButtons } from "../button-utils-client"

const useButtonsApi = () => {
    const { data, error } = useSWR('/api/buttons', fetchButtons);
    return {
        buttons: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useButtonsApi;