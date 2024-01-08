function Dashboard({store}) {
    const money = store((state) => state.money);
    const apples = store((state) => state.apples);
    return (
        <div>
        Money: {money}<br />
        Apples: {apples}<br />
        </div>
    );
}

export default Dashboard;