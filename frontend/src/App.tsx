import { Header } from './components/Header';
import { SalesCard } from './components/SalesCard';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="sales">
          <div className="container">
            <SalesCard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
