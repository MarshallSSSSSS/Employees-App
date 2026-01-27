import './app-info.css'

const AppInfo = ({totalNumberOfEmployees, totalNumberOfIncrease}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Настюшка</h1>
            <h2>Общее число сотрудников: {totalNumberOfEmployees}</h2>
            <h2>Премию получат: {totalNumberOfIncrease}</h2>
        </div>
    )
}

export default AppInfo