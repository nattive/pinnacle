import React from 'react'
import HeadBar from './HeadBar'
import { useHistory } from 'react-router-dom'

export default function HeadbarFunction() {
    let history = useHistory()
    return (
      <>
        <HeadBar history={history} />
      </>
    );
}
