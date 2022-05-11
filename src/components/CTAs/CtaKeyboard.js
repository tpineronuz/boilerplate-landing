import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';

export default function CtaKeyboard() {
  const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
  const row3 = ['ENVIAR', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'BORRAR'];
  const handleClick = ({ nativeEvent }) => {
    console.log(nativeEvent.target.innerHTML);
  };
  return (
    <>
      <Row style={{}}>
        <Col xs={12} sm={12} md={8} lg={6}>
          <ButtonGroup className='mx-auto w-100 me-2'>
            {row1.map((key) => {
              const keyToUse = key.toLocaleUpperCase();
              return (
                <Button onClick={handleClick} className='mr-4' style={{ border: 'solid 1px gray' }}>
                  {keyToUse}
                </Button>
              );
            })}
          </ButtonGroup>
        </Col>
      </Row>

      <Row style={{}}>
        <Col xs={12} sm={12} md={8} lg={6}>
          <ButtonGroup className='mx-auto w-100 me-2'>
            {row2.map((key) => {
              const keyToUse = key.toLocaleUpperCase();
              return (
                <Button onClick={handleClick} className='mr-4' style={{ border: 'solid 1px gray' }}>
                  {keyToUse}
                </Button>
              );
            })}
          </ButtonGroup>
        </Col>
      </Row>

      <Row style={{}}>
        <Col xs={12} sm={12} md={8} lg={6}>
          <ButtonGroup className='mx-auto w-100 me-2'>
            {row3.map((key) => {
              const keyToUse = key.toLocaleUpperCase();
              return (
                <Button onClick={handleClick} className='mr-4' style={{ border: 'solid 1px gray' }}>
                  {keyToUse}
                </Button>
              );
            })}
          </ButtonGroup>
        </Col>
      </Row>
    </>
  );
}
