# `bookmarkApp` Submodule <a name="`bookmarkApp` Submodule" id="@cdktf/provider-okta.bookmarkApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BookmarkApp <a name="BookmarkApp" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app okta_bookmark_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/bookmarkapp"

bookmarkapp.NewBookmarkApp(scope Construct, id *string, config BookmarkAppConfig) BookmarkApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig">BookmarkAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig">BookmarkAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAuthenticationPolicy">ResetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetRequestIntegration">ResetRequestIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts"></a>

```go
func PutTimeouts(value BookmarkAppTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers"></a>

```go
func PutUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityErrorRedirectUrl"></a>

```go
func ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityLoginRedirectUrl"></a>

```go
func ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilitySelfService"></a>

```go
func ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAdminNote"></a>

```go
func ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAppLinksJson"></a>

```go
func ResetAppLinksJson()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAuthenticationPolicy"></a>

```go
func ResetAuthenticationPolicy()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAutoSubmitToolbar"></a>

```go
func ResetAutoSubmitToolbar()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetEnduserNote"></a>

```go
func ResetEnduserNote()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetGroups"></a>

```go
func ResetGroups()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideIos"></a>

```go
func ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideWeb"></a>

```go
func ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetId"></a>

```go
func ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetRequestIntegration` <a name="ResetRequestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetRequestIntegration"></a>

```go
func ResetRequestIntegration()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipGroups"></a>

```go
func ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipUsers"></a>

```go
func ResetSkipUsers()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetUsers"></a>

```go
func ResetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/bookmarkapp"

bookmarkapp.BookmarkApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/bookmarkapp"

bookmarkapp.BookmarkApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/bookmarkapp"

bookmarkapp.BookmarkApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference">BookmarkAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList">BookmarkAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNoteInput">AdminNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groupsInput">GroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIosInput">HideIosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWebInput">HideWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegrationInput">RequestIntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsersInput">SkipUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.usersInput">UsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groups">Groups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIos">HideIos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegration">RequestIntegration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroups">SkipGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsers">SkipUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeouts"></a>

```go
func Timeouts() BookmarkAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference">BookmarkAppTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.users"></a>

```go
func Users() BookmarkAppUsersList
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList">BookmarkAppUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrlInput"></a>

```go
func AccessibilityErrorRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrlInput"></a>

```go
func AccessibilityLoginRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfServiceInput"></a>

```go
func AccessibilitySelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNoteInput"></a>

```go
func AdminNoteInput() *string
```

- *Type:* *string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJsonInput"></a>

```go
func AppLinksJsonInput() *string
```

- *Type:* *string

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicyInput"></a>

```go
func AuthenticationPolicyInput() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbarInput"></a>

```go
func AutoSubmitToolbarInput() interface{}
```

- *Type:* interface{}

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNoteInput"></a>

```go
func EnduserNoteInput() *string
```

- *Type:* *string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groupsInput"></a>

```go
func GroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIosInput"></a>

```go
func HideIosInput() interface{}
```

- *Type:* interface{}

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWebInput"></a>

```go
func HideWebInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `RequestIntegrationInput`<sup>Optional</sup> <a name="RequestIntegrationInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegrationInput"></a>

```go
func RequestIntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroupsInput"></a>

```go
func SkipGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsersInput"></a>

```go
func SkipUsersInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.usersInput"></a>

```go
func UsersInput() interface{}
```

- *Type:* interface{}

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrl"></a>

```go
func AccessibilityErrorRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrl"></a>

```go
func AccessibilityLoginRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfService"></a>

```go
func AccessibilitySelfService() interface{}
```

- *Type:* interface{}

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJson"></a>

```go
func AppLinksJson() *string
```

- *Type:* *string

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicy"></a>

```go
func AuthenticationPolicy() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() interface{}
```

- *Type:* interface{}

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groups"></a>

```go
func Groups() *[]*string
```

- *Type:* *[]*string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIos"></a>

```go
func HideIos() interface{}
```

- *Type:* interface{}

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWeb"></a>

```go
func HideWeb() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `RequestIntegration`<sup>Required</sup> <a name="RequestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegration"></a>

```go
func RequestIntegration() interface{}
```

- *Type:* interface{}

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroups"></a>

```go
func SkipGroups() interface{}
```

- *Type:* interface{}

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsers"></a>

```go
func SkipUsers() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BookmarkAppConfig <a name="BookmarkAppConfig" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/bookmarkapp"

&bookmarkapp.BookmarkAppConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Label: *string,
	Url: *string,
	AccessibilityErrorRedirectUrl: *string,
	AccessibilityLoginRedirectUrl: *string,
	AccessibilitySelfService: interface{},
	AdminNote: *string,
	AppLinksJson: *string,
	AuthenticationPolicy: *string,
	AutoSubmitToolbar: interface{},
	EnduserNote: *string,
	Groups: *[]*string,
	HideIos: interface{},
	HideWeb: interface{},
	Id: *string,
	Logo: *string,
	RequestIntegration: interface{},
	SkipGroups: interface{},
	SkipUsers: interface{},
	Status: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta.bookmarkApp.BookmarkAppTimeouts,
	Users: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.label">Label</a></code> | <code>*string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#url BookmarkApp#url}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.adminNote">AdminNote</a></code> | <code>*string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>*string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.groups">Groups</a></code> | <code>*[]*string</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideIos">HideIos</a></code> | <code>interface{}</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.logo">Logo</a></code> | <code>*string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.requestIntegration">RequestIntegration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#request_integration BookmarkApp#request_integration}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipGroups">SkipGroups</a></code> | <code>interface{}</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipUsers">SkipUsers</a></code> | <code>interface{}</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.status">Status</a></code> | <code>*string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.users">Users</a></code> | <code>interface{}</code> | users block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#label BookmarkApp#label}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#url BookmarkApp#url}.

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityErrorRedirectUrl"></a>

```go
AccessibilityErrorRedirectUrl *string
```

- *Type:* *string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_error_redirect_url BookmarkApp#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityLoginRedirectUrl"></a>

```go
AccessibilityLoginRedirectUrl *string
```

- *Type:* *string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_login_redirect_url BookmarkApp#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilitySelfService"></a>

```go
AccessibilitySelfService interface{}
```

- *Type:* interface{}

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_self_service BookmarkApp#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.adminNote"></a>

```go
AdminNote *string
```

- *Type:* *string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#admin_note BookmarkApp#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.appLinksJson"></a>

```go
AppLinksJson *string
```

- *Type:* *string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#app_links_json BookmarkApp#app_links_json}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.authenticationPolicy"></a>

```go
AuthenticationPolicy *string
```

- *Type:* *string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#authentication_policy BookmarkApp#authentication_policy}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.autoSubmitToolbar"></a>

```go
AutoSubmitToolbar interface{}
```

- *Type:* interface{}

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#auto_submit_toolbar BookmarkApp#auto_submit_toolbar}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.enduserNote"></a>

```go
EnduserNote *string
```

- *Type:* *string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#enduser_note BookmarkApp#enduser_note}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.groups"></a>

```go
Groups *[]*string
```

- *Type:* *[]*string

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#groups BookmarkApp#groups}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideIos"></a>

```go
HideIos interface{}
```

- *Type:* interface{}

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#hide_ios BookmarkApp#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideWeb"></a>

```go
HideWeb interface{}
```

- *Type:* interface{}

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#hide_web BookmarkApp#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#logo BookmarkApp#logo}

---

##### `RequestIntegration`<sup>Optional</sup> <a name="RequestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.requestIntegration"></a>

```go
RequestIntegration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#request_integration BookmarkApp#request_integration}.

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipGroups"></a>

```go
SkipGroups interface{}
```

- *Type:* interface{}

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#skip_groups BookmarkApp#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipUsers"></a>

```go
SkipUsers interface{}
```

- *Type:* interface{}

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#skip_users BookmarkApp#skip_users}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#status BookmarkApp#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.timeouts"></a>

```go
Timeouts BookmarkAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#timeouts BookmarkApp#timeouts}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.users"></a>

```go
Users interface{}
```

- *Type:* interface{}

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#users BookmarkApp#users}

---

### BookmarkAppTimeouts <a name="BookmarkAppTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/bookmarkapp"

&bookmarkapp.BookmarkAppTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#create BookmarkApp#create}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#read BookmarkApp#read}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#update BookmarkApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#create BookmarkApp#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#read BookmarkApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#update BookmarkApp#update}.

---

### BookmarkAppUsers <a name="BookmarkAppUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/bookmarkapp"

&bookmarkapp.BookmarkAppUsers {
	Id: *string,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.id">Id</a></code> | <code>*string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.password">Password</a></code> | <code>*string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.username">Username</a></code> | <code>*string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.id"></a>

```go
Id *string
```

- *Type:* *string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#password BookmarkApp#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#username BookmarkApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### BookmarkAppTimeoutsOutputReference <a name="BookmarkAppTimeoutsOutputReference" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/bookmarkapp"

bookmarkapp.NewBookmarkAppTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BookmarkAppTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BookmarkAppUsersList <a name="BookmarkAppUsersList" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/bookmarkapp"

bookmarkapp.NewBookmarkAppUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BookmarkAppUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get"></a>

```go
func Get(index *f64) BookmarkAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BookmarkAppUsersOutputReference <a name="BookmarkAppUsersOutputReference" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/bookmarkapp"

bookmarkapp.NewBookmarkAppUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BookmarkAppUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



