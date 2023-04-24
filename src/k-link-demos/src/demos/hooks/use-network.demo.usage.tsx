import React from 'react';
import { Text, Table } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { useNetwork } from '@k-link/hooks';

const code = `
import { Text, Table } from '@k-link/core';
import { useNetwork } from '@k-link/hooks';

function Demo() {
  const networkStatus = useNetwork();

  return (
    <Table maw={300} sx={{ tableLayout: 'fixed' }} mx="auto">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Online</td>
          <td>
            <Text size="sm" color={networkStatus.online ? 'success' : 'error'}>
              {networkStatus.online ? 'Online' : 'Offline'}
            </Text>
          </td>
        </tr>

        <tr>
          <td>rtt</td>
          <td>{networkStatus.rtt}</td>
        </tr>

        <tr>
          <td>downlink</td>
          <td>{networkStatus.downlink}</td>
        </tr>

        <tr>
          <td>effectiveType</td>
          <td>{networkStatus.effectiveType}</td>
        </tr>

        <tr>
          <td>saveData</td>
          <td>
            <Text size="sm" color={networkStatus.saveData ? 'success' : 'error'}>
              {networkStatus.saveData ? 'true' : 'false'}
            </Text>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
`;

function Demo() {
  const networkStatus = useNetwork();

  return (
    <Table maw={300} sx={{ tableLayout: 'fixed' }} mx="auto">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Online</td>
          <td>
            <Text size="sm" color={networkStatus.online ? 'success' : 'error'}>
              {networkStatus.online ? 'Online' : 'Offline'}
            </Text>
          </td>
        </tr>

        <tr>
          <td>rtt</td>
          <td>{networkStatus.rtt}</td>
        </tr>

        <tr>
          <td>downlink</td>
          <td>{networkStatus.downlink}</td>
        </tr>

        <tr>
          <td>effectiveType</td>
          <td>{networkStatus.effectiveType}</td>
        </tr>

        <tr>
          <td>saveData</td>
          <td>
            <Text size="sm" color={networkStatus.saveData ? 'success' : 'error'}>
              {networkStatus.saveData ? 'true' : 'false'}
            </Text>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export const useNetworkDemo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
