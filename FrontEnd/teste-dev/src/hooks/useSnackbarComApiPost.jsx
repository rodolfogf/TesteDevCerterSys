import { useState } from 'react';
import ApiService from '../services/ApiService';

const useSnackbarWithApiPost = (successMessage, errorMessage) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackBarResponse, setSnackBarResponse] = useState('');

    const handleApiCall = async (url, data) => {
        try {
            const response = await ApiService.post(url, data);
            if (response.status === 200 || response.status === 201) {
                setSnackBarResponse(response);
                setSnackbarMessage(successMessage);
                setSnackbarSeverity("success");
            } else {
                const responseErrorMessage = response.data?.message || response.statusText || 'Erro desconhecido';
                setSnackbarMessage(`${errorMessage}: ${responseErrorMessage}`);
                setSnackbarSeverity("error");
            }
        } catch (error) {
            const catchError = error.response?.data?.message || error.message || 'Erro desconhecido';
            setSnackbarMessage(`${errorMessage}: ${catchError}`);
            setSnackbarSeverity("error");
        } finally {
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return {
        openSnackbar,
        snackbarMessage,
        snackbarSeverity,
        snackBarResponse,
        handleApiCall,
        handleCloseSnackbar,
    };
};

export default useSnackbarWithApiPost;
