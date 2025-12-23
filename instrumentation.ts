export async function register() {
  // Tidewave integration - disabled for now due to OpenTelemetry bundling issues
  // The API handler at pages/api/tidewave.ts provides the Tidewave endpoint
  if (process.env.NODE_ENV === 'development') {
    console.log('[Tidewave] Handler available at /tidewave endpoint');
  }
}
