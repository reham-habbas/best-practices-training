import axios from "axios";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Image from "next/image";
import { Typography } from "@mui/material";

function Bad() {
    const [digimons, setDigimons] = useState([]);

    const fetchDigimons = async () => {
        const response = await axios.get(
            "https://digimon-api.vercel.app/api/digimon"
        );

        if (response && response.data) setDigimons(response.data);
    };

    useEffect(() => {
        fetchDigimons();
    }, []);

    return (
        <>
            <Grid container>
                <Typography variant="h1" sx={{ m: 3 }}>Digimons App</Typography>
                <Grid container spacing={5}>
                    {digimons.length > 0 && digimons?.map((digimon: any) => (
                        <>
                            <Grid item xs={12} md={2}>
                                <Image
                                    src={digimon?.img}
                                    width={500}
                                    height={500}
                                    alt={digimon?.name}
                                />
                                <Typography variant="h6" textAlign="center">{digimon?.name}</Typography>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </Grid>

        </>
    );
}
export default Bad;
