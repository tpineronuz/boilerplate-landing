import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

export default function CtaGrillaWordle() {
  const [columnas, setColumnas] = useState(1);
  const word = ['', '', '', '', '', '', '', ''];

  return (
    <>
      <Row
        className='d-flex justify-content-center align-items-center'
        style={{ border: 'solid 1px red' }}
      >
        <div className='w-100'>
          {word.map((letter) => (
            <Col xs={1} style={{ height: '30px', border: 'solid 1px black' }}>
              {letter}
            </Col>
          ))}
        </div>
      </Row>
    </>
  );
}
