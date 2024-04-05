import { createSlice } from '@reduxjs/toolkit';
import { GeneralDoctorData, LungsDoctorData, DentalDoctorData, PsychoDoctorData, CovidDoctorData, SurgeonDoctorData, CardioDoctorData, TopDoctorData, AllTopDoctorData, ArticleData, AllArticleData, HospitalData, PharmacyData } from './Data';

const initialState = {
    loading: false,
    doctorData: [],
    topDoctors: [],
    allTopDoctors: [],
    articles: [],
    allArticles: [],
    hospital: [],
    pharmacy: [],
};

const Slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setDoctorData(state, action) {
            state.doctorData = action.payload;
        },
        setTopDoctors(state, action) {
            state.topDoctors = action.payload;
        },
        setAllTopDoctors(state, action) {
            state.allTopDoctors = action.payload;
        },
        setArticles(state, action) {
            state.articles = action.payload;
        },
        setAllArticles(state, action) {
            state.allArticles = action.payload;
        },
        setHospital(state, action) {
            state.hospital = action.payload;
        },
        setPharmacy(state, action) {
            state.pharmacy = action.payload;
        }
    },
});

export const { setLoading, setDoctorData, setTopDoctors, setAllTopDoctors, setArticles, setAllArticles, setHospital, setPharmacy } = Slice.actions;

export const fetchDoctorData = (categories) => (dispatch) => {
    dispatch(setLoading(true));
    let combinedData = [];
    if (categories.General) combinedData = combinedData.concat(GeneralDoctorData.General);
    if (categories.Lungs) combinedData = combinedData.concat(LungsDoctorData.Lungs);
    if (categories.Dental) combinedData = combinedData.concat(DentalDoctorData.Dental);
    if (categories.Psycho) combinedData = combinedData.concat(PsychoDoctorData.Psycho);
    if (categories.Covid) combinedData = combinedData.concat(CovidDoctorData.Covid);
    if (categories.Surgeon) combinedData = combinedData.concat(SurgeonDoctorData.Surgeon);
    if (categories.Cardio) combinedData = combinedData.concat(CardioDoctorData.Cardio);
    setTimeout(() => {
        dispatch(setDoctorData(combinedData));
        dispatch(setLoading(false));
    }, 3000);
};

export const fetchTopDoctorData = () => (dispatch) => {
    dispatch(setLoading(true));
    setTimeout(() => {
        dispatch(setTopDoctors(TopDoctorData));
        dispatch(setAllTopDoctors(AllTopDoctorData));
        dispatch(setLoading(false));
    }, 3000);
};

export const fetchArticleData = () => (dispatch) => {
    dispatch(setLoading(true));
    setTimeout(() => {
        dispatch(setArticles(ArticleData));
        dispatch(setAllArticles(AllArticleData));
        dispatch(setLoading(false));
    }, 1000);
};

export const fetchHospitalData = () => (dispatch) => {
    dispatch(setLoading(true));
    setTimeout(() => {
        dispatch(setHospital(HospitalData));
        dispatch(setLoading(false));
    }, 3000);
};

export const fetchPharmacyData = () => (dispatch) => {
    dispatch(setLoading(true));
    setTimeout(() => {
        dispatch(setPharmacy(PharmacyData));
        dispatch(setLoading(false));
    }, 300);
};

export default Slice.reducer;