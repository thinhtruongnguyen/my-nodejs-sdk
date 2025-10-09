# models.ModelVersioningGroupLite
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **commit\_hash** | **String** | Dependency        map[string]interface{} &#x60;json:\&quot;dependency\&quot;&#x60; | [optional] [default to null] |
| **commit\_message** | **String** | TestResult        map[string]interface{} &#x60;json:\&quot;test_result\&quot;&#x60; InputFormat       map[string]interface{} &#x60;json:\&quot;input_format\&quot;&#x60; OutputFormat      map[string]interface{} &#x60;json:\&quot;output_format\&quot;&#x60; SysRequired       map[string]interface{} &#x60;json:\&quot;sys_require\&quot;&#x60; | [optional] [default to null] |
| **is\_active** | **Boolean** |  | [optional] [default to null] |
| **last\_checked\_at** | **String** |  | [optional] [default to null] |
| **model\_id** | **String** |  | [optional] [default to null] |
| **pending\_platforms** | [**List**](models.PlatformTask.md) |  | [optional] [default to null] |
| **rejected\_platforms** | [**List**](models.PlatformTask.md) |  | [optional] [default to null] |
| **verified\_platforms** | [**List**](models.PlatformTask.md) |  | [optional] [default to null] |
| **verify\_status** | **String** |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

