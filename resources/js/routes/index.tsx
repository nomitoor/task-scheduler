import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from '@/dashoboard/common/Loader';
import PageTitle from '@/dashoboard/components/PageTitle';
import SignIn from '@/dashoboard/pages/Authentication/SignIn';
import SignUp from '@/dashoboard/pages/Authentication/SignUp';
import Calendar from '@/dashoboard/pages/Calendar';
import Chart from '@/dashoboard/pages/Chart';
import ECommerce from '@/dashoboard/pages/Dashboard/ECommerce';
import FormElements from '@/dashoboard/pages/Form/FormElements';
import FormLayout from '@/dashoboard/pages/Form/FormLayout';
import Profile from '@/dashoboard/pages/Profile';
import Settings from '@/dashoboard/pages/Settings';
import Tables from '@/dashoboard/pages/Tables';
import Alerts from '@/dashoboard/pages/UiElements/Alerts';
import Buttons from '@/dashoboard/pages/UiElements/Buttons';
import React from 'react';
import Login from '@/pages/login';
import Register from '@/pages/register';

function AppRoutes() {
    const [loading, setLoading] = useState<boolean>(true);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route
                    index
                    element={
                        <>
                            <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <ECommerce />
                        </>
                    }
                />
                <Route
                    path="/calendar"
                    element={
                        <>
                            <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <Calendar />
                        </>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <>
                            <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <Profile />
                        </>
                    }
                />
                <Route
                    path="/forms/form-elements"
                    element={
                        <>
                            <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <FormElements />
                        </>
                    }
                />
                <Route
                    path="/forms/form-layout"
                    element={
                        <>
                            <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <FormLayout />
                        </>
                    }
                />
                <Route
                    path="/tables"
                    element={
                        <>
                            <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <Tables />
                        </>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <>
                            <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <Settings />
                        </>
                    }
                />
                <Route
                    path="/chart"
                    element={
                        <>
                            <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <Chart />
                        </>
                    }
                />
                <Route
                    path="/ui/alerts"
                    element={
                        <>
                            <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <Alerts />
                        </>
                    }
                />
                <Route
                    path="/ui/buttons"
                    element={
                        <>
                            <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <Buttons />
                        </>
                    }
                />
                <Route
                    path="/auth/signin"
                    element={
                        <>
                            <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <SignIn />
                        </>
                    }
                />
                <Route
                    path="/auth/signup"
                    element={
                        <>
                            <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                            <SignUp />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default AppRoutes;
