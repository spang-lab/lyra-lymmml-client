import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Plot, styles } from 'lyra-library';

const InfoPanel = (
    <p className="lead">
        A malignant lymphoma manipulates immune cells in a manner,
        that these cells don’t attack the tumor-cells. In this part of the
        {' '}
        <a href="http://www.uni-regensburg.de/Fakultaeten/Medizin/funktionelle-genomik/mmml-demo/workpackage_4.html" target="blank">
            project
        </a>
        {' '}
        we focus on the reprogramming of tumor-associated macrophages (TAM).
        Our principle topic of investigation is the molecular composition in
        the secretome of the lymphoma and the effect of the secretome on the
        gene expression phenotype of macrophages. After molecular analysis,
        algorithms of causal inference allow us to identify potential proteins
        and metabolits in the secretome, that are involved in the causal
        reprogramming of macrophages. With these results, we want to identify
        molecular targets, which allow us to medically interfere in the
        communication between tumor and the immune system.
    </p>
);


const MacrophagesResult = () => (
    <div>
        <Container fluid >
            <Row>
                <Col md={12} >
                    <h1 className="pb-2 mt-4 mb-2 border-bottom" >

                        Identification of molecular targets
                        for the immunotherapy of lymphomas
                        <br />
                        <small>K. Dettmer, W. Gronwald, D. Kube</small>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Plot name="lymmml.macrophages.barplot" dataset="macrophages" height={400} />
                </Col>
            </Row>
            <Row>
                <Col md={{ size: 10, offset: 1 }} >
                    <div className={styles.padding_tb_hu} >
                        {InfoPanel}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default MacrophagesResult;

