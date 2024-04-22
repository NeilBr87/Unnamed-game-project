import { useEffect, useState } from 'react';

export default function Risk(props) {


    const [riskDisplay, setRiskDisplay] = useState('')
    useEffect(() => {
        if (props.wrightPatrollers === 1) {
            props.setWrightRisk(20)
        }
        if (props.wrightPatrollers > 1) {
            props.setWrightRisk(0)
        }
        if (props.mainPatrollers === 1) {
            props.setMainRisk(20)
        }
        if (props.mainPatrollers > 1) {
            props.setMainRisk(0)
        }
        if (props.colverPatrollers === 1) {
            props.setColverRisk(20)
        }
        if (props.colverPatrollers > 1) {
            props.setColverRisk(0)
        }
        if (props.braxtonPatrollers === 1) {
            props.setBraxtonRisk(20)
        }
        if (props.braxtonPatrollers > 1) {
            props.setBraxtonRisk(0)
        }
        if (props.jeffersonPatrollers === 1) {
            props.setJeffersonRisk(20)
        }
        if (props.jeffersonPatrollers > 1) {
            props.setJeffersonRisk(0)
        }
        if (props.booniesPatrollers === 1) {
            props.setBooniesRisk(20)
        }
        if (props.booniesPatrollers > 1) {
            props.setBooniesRisk(0)
        }

    }, [props.wrightPatrollers, props.mainPatrollers, props.colverPatrollers, props.braxtonPatrollers, props.jeffersonPatrollers, props.booniesPatrollers])
    
    useEffect(() => {
        if (props.currentRisk === "wright") {
            setRiskDisplay(props.wrightRisk)
        }
        if (props.currentRisk === "main") {
            setRiskDisplay(props.mainRisk)
        }
        if (props.currentRisk === "colver") {
            setRiskDisplay(props.colverRisk)
        }
        if (props.currentRisk === "braxton") {
            setRiskDisplay(props.braxtonRisk)
        }
        if (props.currentRisk === "jefferson") {
            setRiskDisplay(props.jeffersonRisk)
        }
        if (props.currentRisk === "boonies") {
            setRiskDisplay(props.booniesRisk)
        }
    }, [props.currentRisk, props.wrightRisk, props.mainRisk, props.colverRisk, props.braxtonRisk, props.jeffersonRisk, props.booniesRisk])

    return (
        <div style={{
            marginTop: '-5px',
            marginBottom: '-5px',
        }}>
            <p>Risk: {riskDisplay}%</p>
            
        </div>
    )
}