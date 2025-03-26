import styles from '../styles/StyledPage.module.css';
import styled from 'styled-components';

const StyledButton = styled.button`
padding: 10px 20px;
color: white;
border: none;
border-radius: 5px;
background-color: ${props => props.$bgColor || 'blue'};
cursor: pointer;
`;

export default function StyledPage() {
    const headerStyle = {
        backgroundColor: '#4caf50',
        fontSize: '2rem',
        padding: '20px',
        color: 'white',
        textAlign: 'center',
    };

    // Click handlers
    const handleCSSButtonClick = () => {
        alert("Here is the CSS Module button feature.");
    };

    const handleStyledButtonClick = () => {
        alert("Here is the Styled-Component button feature.");
    };

    return (
        <div className={styles.container}>
            <h1 style={headerStyle}>Welcome to the Styled Page</h1>

            <button className={styles.moduleButton} onClick={handleCSSButtonClick}>
                CSS Module Button
            </button>

            <StyledButton $bgColor="crimson" onClick={handleStyledButtonClick}>
                Styled-Component Button
            </StyledButton>
        </div>
    );
}