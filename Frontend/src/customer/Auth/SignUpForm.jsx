import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { use } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../State/Auth/Action";
import { store } from "../../State/Store";

const SignUpForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const { auth } = useSelector(store => store)

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }

    }, [jwt, auth.jwt])



    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = {
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            email: data.get("email"),
            password: data.get("password"),
        }
        dispatch(register(userData))

       
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstname"
                            name="firstname"
                            label="Firstname"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastname"
                            name="lastname"
                            label="Lastname"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="password"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            className=" w-full"
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ padding: ".8rem 0", bgcolor: "#b734eb" }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className="flex justify-center items-center flex-col">
                <div className="flex py-3 items-center">
                    <p>If you have already an account?</p>
                    <button className="text-blue-800 ml-2  " onClick={() => navigate("/login")} size="small">Login</button>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
