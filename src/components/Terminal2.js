import Terminal from 'react-bash';

function Terminal2({store}) {
    return (
        <div style={{display: 'inline-block', height: '100vh', width: '100%'}}>
            <Terminal prefix="" theme={Terminal.Themes.DARK} />
        </div>
    );
}

export default Terminal2;