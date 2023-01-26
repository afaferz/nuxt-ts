import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/Api.utils'

const accessor: Plugin = ({ $axios }) => {
    initializeAxios($axios)
}

export default accessor
