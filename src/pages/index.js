import CtaGrillaWordle from 'components/CTAs/CtaGrillaWordle';
import CtaKeyboard from 'components/CTAs/CtaKeyboard';
import CtaTest from 'components/CTAs/CtaTest';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div style={{ width: '100%' }}>
      <div style={{height: '70vh'}}>
        <CtaGrillaWordle />
      </div>
      <CtaKeyboard />
    </div>
  );
}
