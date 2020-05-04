import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import HALO from 'vanta/src/vanta.halo';
import classNames from "classnames";

const Container = styled.div`
  min-height: 100vh;
`;

const Heading = styled(({className, ...rest}) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <p className={classNames('display-1', className)} {...rest}/>
    )
)`
  font-size: ${props => `${props.size}px`};
`;

const Index = () => {
    const ref = useRef(null);

    useEffect(() => {
        const vanta = HALO({
            xOffset: 0.25,
            el: ref.current,
            backgroundColor: '#000',
        });

        return () => vanta.destroy();
    }, []);

    return (
        <div ref={ref}>
            <Container className="container d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col text-white">
                        <Heading size={72}>Mateusz Wiater</Heading>
                        <Heading size={24}>New website coming soon!</Heading>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Index;
