import modules from './EmptyListWarning.module.css';

const EmptyListWarning = (props) => {
    return <div className={modules.container}>
        {props.title}
    </div>
};

export default EmptyListWarning;