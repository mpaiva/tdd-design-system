import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function generateCoverageReport() {
  try {
    await execAsync('npm run coverage');
    return { success: true };
  } catch (error) {
    console.error('Failed to generate coverage report:', error);
    throw error;
  }
}