import './App.css'
import { LiquidGlassPiece } from './components/LiquidGlassPiece/LiquidGlassPiece';
import { getLiquidGlassUV } from './tools/getLiquidGlassUV';

function App() {
    getLiquidGlassUV(1000, 1000, 100, 50);

    return (
        <section role="main" className="App">
            <div className="App__wrapper" style={{ background: 'lightgray' }}>
                <img
                    className="App__background"
                    src="https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <div className="App__test">
                    <LiquidGlassPiece
                        id="test1"
                        className="App__test__1"
                        width={48}
                        height={48}
                        borderRadius={24}
                        zRadius={3}
                    >
                        <div />
                    </LiquidGlassPiece>

                    <LiquidGlassPiece
                        id="test2"
                        className="App__test__2"
                        width={124}
                        height={48}
                        borderRadius={24}
                        zRadius={3}
                    >
                        <div />
                    </LiquidGlassPiece>

                    <LiquidGlassPiece
                        id="test3"
                        className="App__test__3"
                        width={200}
                        height={150}
                        borderRadius={32}
                        zRadius={8}
                    >
                        <div />
                    </LiquidGlassPiece>
                </div>
            </div>
        </section>
    );
}

export default App
