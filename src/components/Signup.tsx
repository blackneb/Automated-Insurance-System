import React, { useState } from 'react'
import { Button, message, Steps, theme } from 'antd';

const Signup = ({setCreateAccount}:any) => {
  const steps = [
    {
      title: 'Basic Information',
      content: 'Basic information',
    },
    {
      title: 'Type Of Insurance',
      content: 'Types Of Insurance',
    },
    {
      title: 'Date Appointment',
      content: 'Date Appointment',
    },
    {
      title: 'Document Entry',
      content: 'Document Entry',
    },
    {
      title: 'Payment',
      content: 'Payment',
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start w-full h-16">
          <div className="flex-shrink-0">
                <p className='text-zinc-800 w-48'>LOGO</p>
              </div>
            <div className="flex items-center justify-start w-full">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 ">
                 
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
            </div>
          </div>
        </div>
      </nav>

      <div className='flex flex-col justify-center mx-4 mt-4'>
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="default" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="default" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          <Button style={{ margin: '0 8px' }} onClick={() => { setCreateAccount(false) }}>
              Back to Login
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Signup
