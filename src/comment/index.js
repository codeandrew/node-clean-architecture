import ipRegex from 'ip-regex'


import buildMakeSource from './source'
import buildMakeComment from '.comment'

const makesource = buildMakeSource({ isValidIp })
const makeComment = buildMakeComment({Id, makeSource})

export default makeComment

function isValidIp (ip) {
  return ipRegex({ exact: true }).test(ip)
}
