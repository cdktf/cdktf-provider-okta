# `okta_org_configuration`

Refer to the Terraform Registory for docs: [`okta_org_configuration`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration).

# `orgConfiguration` Submodule <a name="`orgConfiguration` Submodule" id="@cdktf/provider-okta.orgConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgConfiguration <a name="OrgConfiguration" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration okta_org_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/orgconfiguration"

orgconfiguration.NewOrgConfiguration(scope Construct, id *string, config OrgConfigurationConfig) OrgConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig">OrgConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig">OrgConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetBillingContactUser">ResetBillingContactUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetEndUserSupportHelpUrl">ResetEndUserSupportHelpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOptOutCommunicationEmails">ResetOptOutCommunicationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetSupportPhoneNumber">ResetSupportPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetTechnicalContactUser">ResetTechnicalContactUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetWebsite">ResetWebsite</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress1"></a>

```go
func ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress2"></a>

```go
func ResetAddress2()
```

##### `ResetBillingContactUser` <a name="ResetBillingContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetBillingContactUser"></a>

```go
func ResetBillingContactUser()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCity"></a>

```go
func ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetEndUserSupportHelpUrl` <a name="ResetEndUserSupportHelpUrl" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetEndUserSupportHelpUrl"></a>

```go
func ResetEndUserSupportHelpUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetOptOutCommunicationEmails` <a name="ResetOptOutCommunicationEmails" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOptOutCommunicationEmails"></a>

```go
func ResetOptOutCommunicationEmails()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetState"></a>

```go
func ResetState()
```

##### `ResetSupportPhoneNumber` <a name="ResetSupportPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetSupportPhoneNumber"></a>

```go
func ResetSupportPhoneNumber()
```

##### `ResetTechnicalContactUser` <a name="ResetTechnicalContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetTechnicalContactUser"></a>

```go
func ResetTechnicalContactUser()
```

##### `ResetWebsite` <a name="ResetWebsite" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetWebsite"></a>

```go
func ResetWebsite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/orgconfiguration"

orgconfiguration.OrgConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/orgconfiguration"

orgconfiguration.OrgConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/orgconfiguration"

orgconfiguration.OrgConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.subdomain">Subdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1Input">Address1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2Input">Address2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUserInput">BillingContactUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyNameInput">CompanyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrlInput">EndUserSupportHelpUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmailsInput">OptOutCommunicationEmailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumberInput">SupportPhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUserInput">TechnicalContactUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.websiteInput">WebsiteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUser">BillingContactUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrl">EndUserSupportHelpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmails">OptOutCommunicationEmails</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumber">SupportPhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUser">TechnicalContactUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.website">Website</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.subdomain"></a>

```go
func Subdomain() *string
```

- *Type:* *string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1Input"></a>

```go
func Address1Input() *string
```

- *Type:* *string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2Input"></a>

```go
func Address2Input() *string
```

- *Type:* *string

---

##### `BillingContactUserInput`<sup>Optional</sup> <a name="BillingContactUserInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUserInput"></a>

```go
func BillingContactUserInput() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyNameInput"></a>

```go
func CompanyNameInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `EndUserSupportHelpUrlInput`<sup>Optional</sup> <a name="EndUserSupportHelpUrlInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrlInput"></a>

```go
func EndUserSupportHelpUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `OptOutCommunicationEmailsInput`<sup>Optional</sup> <a name="OptOutCommunicationEmailsInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmailsInput"></a>

```go
func OptOutCommunicationEmailsInput() interface{}
```

- *Type:* interface{}

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `SupportPhoneNumberInput`<sup>Optional</sup> <a name="SupportPhoneNumberInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumberInput"></a>

```go
func SupportPhoneNumberInput() *string
```

- *Type:* *string

---

##### `TechnicalContactUserInput`<sup>Optional</sup> <a name="TechnicalContactUserInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUserInput"></a>

```go
func TechnicalContactUserInput() *string
```

- *Type:* *string

---

##### `WebsiteInput`<sup>Optional</sup> <a name="WebsiteInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.websiteInput"></a>

```go
func WebsiteInput() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `BillingContactUser`<sup>Required</sup> <a name="BillingContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUser"></a>

```go
func BillingContactUser() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `EndUserSupportHelpUrl`<sup>Required</sup> <a name="EndUserSupportHelpUrl" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrl"></a>

```go
func EndUserSupportHelpUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `OptOutCommunicationEmails`<sup>Required</sup> <a name="OptOutCommunicationEmails" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmails"></a>

```go
func OptOutCommunicationEmails() interface{}
```

- *Type:* interface{}

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportPhoneNumber`<sup>Required</sup> <a name="SupportPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumber"></a>

```go
func SupportPhoneNumber() *string
```

- *Type:* *string

---

##### `TechnicalContactUser`<sup>Required</sup> <a name="TechnicalContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUser"></a>

```go
func TechnicalContactUser() *string
```

- *Type:* *string

---

##### `Website`<sup>Required</sup> <a name="Website" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.website"></a>

```go
func Website() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrgConfigurationConfig <a name="OrgConfigurationConfig" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/orgconfiguration"

&orgconfiguration.OrgConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompanyName: *string,
	Address1: *string,
	Address2: *string,
	BillingContactUser: *string,
	City: *string,
	Country: *string,
	EndUserSupportHelpUrl: *string,
	Id: *string,
	Logo: *string,
	OptOutCommunicationEmails: interface{},
	PhoneNumber: *string,
	PostalCode: *string,
	State: *string,
	SupportPhoneNumber: *string,
	TechnicalContactUser: *string,
	Website: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.companyName">CompanyName</a></code> | <code>*string</code> | Name of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address1">Address1</a></code> | <code>*string</code> | Primary address of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address2">Address2</a></code> | <code>*string</code> | Secondary address of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.billingContactUser">BillingContactUser</a></code> | <code>*string</code> | User ID representing the billing contact. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.city">City</a></code> | <code>*string</code> | City of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.country">Country</a></code> | <code>*string</code> | Country of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.endUserSupportHelpUrl">EndUserSupportHelpUrl</a></code> | <code>*string</code> | Support link of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#id OrgConfiguration#id}. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.logo">Logo</a></code> | <code>*string</code> | Local path to logo of the org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.optOutCommunicationEmails">OptOutCommunicationEmails</a></code> | <code>interface{}</code> | Indicates whether the org's users receive Okta Communication emails. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Support help phone of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.postalCode">PostalCode</a></code> | <code>*string</code> | Postal code of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.state">State</a></code> | <code>*string</code> | State of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.supportPhoneNumber">SupportPhoneNumber</a></code> | <code>*string</code> | Support help phone of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.technicalContactUser">TechnicalContactUser</a></code> | <code>*string</code> | User ID representing the technical contact. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.website">Website</a></code> | <code>*string</code> | The org's website. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.companyName"></a>

```go
CompanyName *string
```

- *Type:* *string

Name of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#company_name OrgConfiguration#company_name}

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address1"></a>

```go
Address1 *string
```

- *Type:* *string

Primary address of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#address_1 OrgConfiguration#address_1}

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address2"></a>

```go
Address2 *string
```

- *Type:* *string

Secondary address of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#address_2 OrgConfiguration#address_2}

---

##### `BillingContactUser`<sup>Optional</sup> <a name="BillingContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.billingContactUser"></a>

```go
BillingContactUser *string
```

- *Type:* *string

User ID representing the billing contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#billing_contact_user OrgConfiguration#billing_contact_user}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.city"></a>

```go
City *string
```

- *Type:* *string

City of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#city OrgConfiguration#city}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.country"></a>

```go
Country *string
```

- *Type:* *string

Country of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#country OrgConfiguration#country}

---

##### `EndUserSupportHelpUrl`<sup>Optional</sup> <a name="EndUserSupportHelpUrl" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.endUserSupportHelpUrl"></a>

```go
EndUserSupportHelpUrl *string
```

- *Type:* *string

Support link of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#end_user_support_help_url OrgConfiguration#end_user_support_help_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#id OrgConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local path to logo of the org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#logo OrgConfiguration#logo}

---

##### `OptOutCommunicationEmails`<sup>Optional</sup> <a name="OptOutCommunicationEmails" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.optOutCommunicationEmails"></a>

```go
OptOutCommunicationEmails interface{}
```

- *Type:* interface{}

Indicates whether the org's users receive Okta Communication emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#opt_out_communication_emails OrgConfiguration#opt_out_communication_emails}

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Support help phone of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#phone_number OrgConfiguration#phone_number}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Postal code of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#postal_code OrgConfiguration#postal_code}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

State of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#state OrgConfiguration#state}

---

##### `SupportPhoneNumber`<sup>Optional</sup> <a name="SupportPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.supportPhoneNumber"></a>

```go
SupportPhoneNumber *string
```

- *Type:* *string

Support help phone of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#support_phone_number OrgConfiguration#support_phone_number}

---

##### `TechnicalContactUser`<sup>Optional</sup> <a name="TechnicalContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.technicalContactUser"></a>

```go
TechnicalContactUser *string
```

- *Type:* *string

User ID representing the technical contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#technical_contact_user OrgConfiguration#technical_contact_user}

---

##### `Website`<sup>Optional</sup> <a name="Website" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.website"></a>

```go
Website *string
```

- *Type:* *string

The org's website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/org_configuration#website OrgConfiguration#website}

---



