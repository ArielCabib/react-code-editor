import { Button, TextField } from "@mui/material";
import { useState } from "react";

function Dashboard({store}) {
    const money = store((state) => state.money);
    const apples = store((state) => state.apples);
    const farms = store((state) => state.ownedFarms);
    // const addFarm = store((state) => state.addFarm);

    // const [farmName, setFarmName] = useState('');

    return (
        <div>
        Money: {money}<br />
        Apples: {apples}<br />
        Farms: {farms.join(', ')}<br />
        <br />

        {/* <TextField label="Farm Name" autoComplete="false" value={farmName} onChange={e => setFarmName(e.target.value)}/>
        <Button onClick={() => addFarm(farmName)}>Add Farm</Button> */}
        </div>
    );
}

export default Dashboard;