
import React, { useState } from 'react';
import dataRalationship from '../../../api/mock-data/mock-data-relationship-list.json'
import dataSupportControl from '../../../api/mock-data/mock-data-support-control.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useRouter } from 'next/router';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import Performance from '@/components/Performance';

export default function AthletePerformance() {
  const { query, push, back } = useRouter();

  const athleteId = query?.id;

  return (
    <>
    <Header />
      <div className="row justify-content-start" >
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
        <ul className="nav nav-tabs">
          <li className="nav-item me-1">
            <a className="nav-link" aria-current="page" href={`/secure/athletes/${athleteId}/athleteRelationship`}>Relacionamento</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={`/secure/athletes/${athleteId}/athletePerformance`}>Desempenho</a>
          </li>
        </ul>
          <div className="card athlete-detail-card" style={{backgroundColor: 'var(--bg-secondary-color)', marginRight:'10px'}}>
              <Performance />
          </div>
        </div>
      </div>
    </>
  )
}