import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8r7b4zia',
    dataset: 'production'
  },
  deployment: {
	appId: 'et2ymib361epuwexpu43e371',
    autoUpdates: true,
  }
})
