import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert'

const App: React.FC = () => {
  return (
    <div className="App">
      <Alert
        // closable={true}
        title="this is alert!"
        alertType={AlertType.Default}
        description="哈哈哈哈"
      />
      <Button
        disabled 
      >Hello</Button>
      {/* 在组件中可以像原生一样使用onClick */}
      <Button
        onClick={() => alert(222)}
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
      >
        Hello
      </Button>
      <Button
        btnType={ButtonType.Danger}
        size={ButtonSize.Small}
      >
        Hello
      </Button>
      {/* 在组件中可以像原生a标签一样使用target */}
      <Button
        // disabled
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        target="_blank"
      >
        Baidu Link
      </Button>
    </div>
  );
}

export default App;
