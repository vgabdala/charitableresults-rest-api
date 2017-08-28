export default {

    mongo: {
     	default: {
    		port: 27017
    	},
    	development: {
				db: 'charitableresultdev',
				host: 'localhost'
    	},
    	production: {
				db: 'charitableresult',
				host: 'localhost'
    	}
    }

}