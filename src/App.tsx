import './App.css'
import { LiquidGlassPiece } from './components/LiquidGlassPiece/LiquidGlassPiece';
import { getLiquidGlassUV } from './tools/getLiquidGlassUV';

function App() {
    getLiquidGlassUV(1000, 1000, 100, 50);

    return (
        <section role="main" className="App">
            <div className="App__wrapper">
                <img
                    className="App__background"
                    src="https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <LiquidGlassPiece
                    id="test"
                    width={400}
                    height={400}
                    borderRadius={20}
                    zRadius={15}
                >
                    <div />
                </LiquidGlassPiece>
            </div>
        </section>
    );
}

export default App
