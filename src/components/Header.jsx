import Button from './Button';

function HeaderComponent({title, toggleForm, showAdd}) {
    const onClick = () => {
        toggleForm()
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} 
                    color={showAdd ? 'red' : 'green'} 
                    text={showAdd ? 'Close' : 'Add'}/>
        </header>
    )
    
}

HeaderComponent.defaultProps = {
    title: 'Task Tracker'
}

export default HeaderComponent