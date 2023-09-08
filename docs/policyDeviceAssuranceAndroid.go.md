# `okta_policy_device_assurance_android`

Refer to the Terraform Registory for docs: [`okta_policy_device_assurance_android`](https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_android).

# `policyDeviceAssuranceAndroid` Submodule <a name="`policyDeviceAssuranceAndroid` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceAndroid <a name="PolicyDeviceAssuranceAndroid" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_android okta_policy_device_assurance_android}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policydeviceassuranceandroid"

policydeviceassuranceandroid.NewPolicyDeviceAssuranceAndroid(scope Construct, id *string, config PolicyDeviceAssuranceAndroidConfig) PolicyDeviceAssuranceAndroid
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig">PolicyDeviceAssuranceAndroidConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig">PolicyDeviceAssuranceAndroidConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetDiskEncryptionType">ResetDiskEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetJailbreak">ResetJailbreak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOsVersion">ResetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetScreenlockType">ResetScreenlockType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetSecureHardwarePresent">ResetSecureHardwarePresent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDiskEncryptionType` <a name="ResetDiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetDiskEncryptionType"></a>

```go
func ResetDiskEncryptionType()
```

##### `ResetJailbreak` <a name="ResetJailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetJailbreak"></a>

```go
func ResetJailbreak()
```

##### `ResetOsVersion` <a name="ResetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOsVersion"></a>

```go
func ResetOsVersion()
```

##### `ResetScreenlockType` <a name="ResetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetScreenlockType"></a>

```go
func ResetScreenlockType()
```

##### `ResetSecureHardwarePresent` <a name="ResetSecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetSecureHardwarePresent"></a>

```go
func ResetSecureHardwarePresent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policydeviceassuranceandroid"

policydeviceassuranceandroid.PolicyDeviceAssuranceAndroid_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policydeviceassuranceandroid"

policydeviceassuranceandroid.PolicyDeviceAssuranceAndroid_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policydeviceassuranceandroid"

policydeviceassuranceandroid.PolicyDeviceAssuranceAndroid_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdate">LastUpdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionTypeInput">DiskEncryptionTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreakInput">JailbreakInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersionInput">OsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockTypeInput">ScreenlockTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresentInput">SecureHardwarePresentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionType">DiskEncryptionType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreak">Jailbreak</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockType">ScreenlockType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdate"></a>

```go
func LastUpdate() *string
```

- *Type:* *string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `DiskEncryptionTypeInput`<sup>Optional</sup> <a name="DiskEncryptionTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionTypeInput"></a>

```go
func DiskEncryptionTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `JailbreakInput`<sup>Optional</sup> <a name="JailbreakInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreakInput"></a>

```go
func JailbreakInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsVersionInput`<sup>Optional</sup> <a name="OsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersionInput"></a>

```go
func OsVersionInput() *string
```

- *Type:* *string

---

##### `ScreenlockTypeInput`<sup>Optional</sup> <a name="ScreenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockTypeInput"></a>

```go
func ScreenlockTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecureHardwarePresentInput`<sup>Optional</sup> <a name="SecureHardwarePresentInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresentInput"></a>

```go
func SecureHardwarePresentInput() interface{}
```

- *Type:* interface{}

---

##### `DiskEncryptionType`<sup>Required</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionType"></a>

```go
func DiskEncryptionType() *[]*string
```

- *Type:* *[]*string

---

##### `Jailbreak`<sup>Required</sup> <a name="Jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreak"></a>

```go
func Jailbreak() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

##### `ScreenlockType`<sup>Required</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockType"></a>

```go
func ScreenlockType() *[]*string
```

- *Type:* *[]*string

---

##### `SecureHardwarePresent`<sup>Required</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresent"></a>

```go
func SecureHardwarePresent() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceAndroidConfig <a name="PolicyDeviceAssuranceAndroidConfig" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policydeviceassuranceandroid"

&policydeviceassuranceandroid.PolicyDeviceAssuranceAndroidConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DiskEncryptionType: *[]*string,
	Jailbreak: interface{},
	OsVersion: *string,
	ScreenlockType: *[]*string,
	SecureHardwarePresent: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.name">Name</a></code> | <code>*string</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.diskEncryptionType">DiskEncryptionType</a></code> | <code>*[]*string</code> | List of disk encryption type, can be FULL, USER. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.jailbreak">Jailbreak</a></code> | <code>interface{}</code> | The device jailbreak. Only for android and iOS platform. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.osVersion">OsVersion</a></code> | <code>*string</code> | The device os minimum version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.screenlockType">ScreenlockType</a></code> | <code>*[]*string</code> | List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>interface{}</code> | Indicates if the device constains a secure hardware functionality. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_android#name PolicyDeviceAssuranceAndroid#name}

---

##### `DiskEncryptionType`<sup>Optional</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.diskEncryptionType"></a>

```go
DiskEncryptionType *[]*string
```

- *Type:* *[]*string

List of disk encryption type, can be FULL, USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_android#disk_encryption_type PolicyDeviceAssuranceAndroid#disk_encryption_type}

---

##### `Jailbreak`<sup>Optional</sup> <a name="Jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.jailbreak"></a>

```go
Jailbreak interface{}
```

- *Type:* interface{}

The device jailbreak. Only for android and iOS platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_android#jailbreak PolicyDeviceAssuranceAndroid#jailbreak}

---

##### `OsVersion`<sup>Optional</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.osVersion"></a>

```go
OsVersion *string
```

- *Type:* *string

The device os minimum version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_android#os_version PolicyDeviceAssuranceAndroid#os_version}

---

##### `ScreenlockType`<sup>Optional</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.screenlockType"></a>

```go
ScreenlockType *[]*string
```

- *Type:* *[]*string

List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_android#screenlock_type PolicyDeviceAssuranceAndroid#screenlock_type}

---

##### `SecureHardwarePresent`<sup>Optional</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.secureHardwarePresent"></a>

```go
SecureHardwarePresent interface{}
```

- *Type:* interface{}

Indicates if the device constains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_android#secure_hardware_present PolicyDeviceAssuranceAndroid#secure_hardware_present}

---



