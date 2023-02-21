# `bookmarkApp` Submodule <a name="`bookmarkApp` Submodule" id="@cdktf/provider-okta.bookmarkApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BookmarkApp <a name="BookmarkApp" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app okta_bookmark_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new BookmarkApp(Construct Scope, string Id, BookmarkAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig">BookmarkAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts"></a>

```csharp
private void PutTimeouts(BookmarkAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers"></a>

```csharp
private void PutUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityErrorRedirectUrl"></a>

```csharp
private void ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityLoginRedirectUrl"></a>

```csharp
private void ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilitySelfService"></a>

```csharp
private void ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAdminNote"></a>

```csharp
private void ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAppLinksJson"></a>

```csharp
private void ResetAppLinksJson()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAuthenticationPolicy"></a>

```csharp
private void ResetAuthenticationPolicy()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAutoSubmitToolbar"></a>

```csharp
private void ResetAutoSubmitToolbar()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetEnduserNote"></a>

```csharp
private void ResetEnduserNote()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideIos"></a>

```csharp
private void ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideWeb"></a>

```csharp
private void ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetRequestIntegration` <a name="ResetRequestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetRequestIntegration"></a>

```csharp
private void ResetRequestIntegration()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipGroups"></a>

```csharp
private void ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipUsers"></a>

```csharp
private void ResetSkipUsers()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetUsers"></a>

```csharp
private void ResetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

BookmarkApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

BookmarkApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

BookmarkApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.signOnMode">SignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference">BookmarkAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList">BookmarkAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNoteInput">AdminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIosInput">HideIosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWebInput">HideWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegrationInput">RequestIntegrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsersInput">SkipUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.usersInput">UsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNote">AdminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNote">EnduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIos">HideIos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWeb">HideWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegration">RequestIntegration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroups">SkipGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsers">SkipUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.signOnMode"></a>

```csharp
public string SignOnMode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeouts"></a>

```csharp
public BookmarkAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference">BookmarkAppTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.users"></a>

```csharp
public BookmarkAppUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList">BookmarkAppUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrlInput"></a>

```csharp
public string AccessibilityErrorRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrlInput"></a>

```csharp
public string AccessibilityLoginRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfServiceInput"></a>

```csharp
public object AccessibilitySelfServiceInput { get; }
```

- *Type:* object

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNoteInput"></a>

```csharp
public string AdminNoteInput { get; }
```

- *Type:* string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJsonInput"></a>

```csharp
public string AppLinksJsonInput { get; }
```

- *Type:* string

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicyInput"></a>

```csharp
public string AuthenticationPolicyInput { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbarInput"></a>

```csharp
public object AutoSubmitToolbarInput { get; }
```

- *Type:* object

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNoteInput"></a>

```csharp
public string EnduserNoteInput { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIosInput"></a>

```csharp
public object HideIosInput { get; }
```

- *Type:* object

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWebInput"></a>

```csharp
public object HideWebInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `RequestIntegrationInput`<sup>Optional</sup> <a name="RequestIntegrationInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegrationInput"></a>

```csharp
public object RequestIntegrationInput { get; }
```

- *Type:* object

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroupsInput"></a>

```csharp
public object SkipGroupsInput { get; }
```

- *Type:* object

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsersInput"></a>

```csharp
public object SkipUsersInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.usersInput"></a>

```csharp
public object UsersInput { get; }
```

- *Type:* object

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; }
```

- *Type:* object

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNote"></a>

```csharp
public string AdminNote { get; }
```

- *Type:* string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; }
```

- *Type:* string

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; }
```

- *Type:* object

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNote"></a>

```csharp
public string EnduserNote { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIos"></a>

```csharp
public object HideIos { get; }
```

- *Type:* object

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWeb"></a>

```csharp
public object HideWeb { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `RequestIntegration`<sup>Required</sup> <a name="RequestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegration"></a>

```csharp
public object RequestIntegration { get; }
```

- *Type:* object

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroups"></a>

```csharp
public object SkipGroups { get; }
```

- *Type:* object

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsers"></a>

```csharp
public object SkipUsers { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BookmarkAppConfig <a name="BookmarkAppConfig" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new BookmarkAppConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Label,
    string Url,
    string AccessibilityErrorRedirectUrl = null,
    string AccessibilityLoginRedirectUrl = null,
    object AccessibilitySelfService = null,
    string AdminNote = null,
    string AppLinksJson = null,
    string AuthenticationPolicy = null,
    object AutoSubmitToolbar = null,
    string EnduserNote = null,
    string[] Groups = null,
    object HideIos = null,
    object HideWeb = null,
    string Id = null,
    string Logo = null,
    object RequestIntegration = null,
    object SkipGroups = null,
    object SkipUsers = null,
    string Status = null,
    BookmarkAppTimeouts Timeouts = null,
    object Users = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.label">Label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#url BookmarkApp#url}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.adminNote">AdminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.enduserNote">EnduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.groups">Groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideIos">HideIos</a></code> | <code>object</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideWeb">HideWeb</a></code> | <code>object</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.logo">Logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.requestIntegration">RequestIntegration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#request_integration BookmarkApp#request_integration}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipGroups">SkipGroups</a></code> | <code>object</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipUsers">SkipUsers</a></code> | <code>object</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.status">Status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.users">Users</a></code> | <code>object</code> | users block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#label BookmarkApp#label}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#url BookmarkApp#url}.

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; set; }
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_error_redirect_url BookmarkApp#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; set; }
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_login_redirect_url BookmarkApp#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; set; }
```

- *Type:* object

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_self_service BookmarkApp#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.adminNote"></a>

```csharp
public string AdminNote { get; set; }
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#admin_note BookmarkApp#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; set; }
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#app_links_json BookmarkApp#app_links_json}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; set; }
```

- *Type:* string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#authentication_policy BookmarkApp#authentication_policy}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; set; }
```

- *Type:* object

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#auto_submit_toolbar BookmarkApp#auto_submit_toolbar}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.enduserNote"></a>

```csharp
public string EnduserNote { get; set; }
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#enduser_note BookmarkApp#enduser_note}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#groups BookmarkApp#groups}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideIos"></a>

```csharp
public object HideIos { get; set; }
```

- *Type:* object

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#hide_ios BookmarkApp#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideWeb"></a>

```csharp
public object HideWeb { get; set; }
```

- *Type:* object

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#hide_web BookmarkApp#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#logo BookmarkApp#logo}

---

##### `RequestIntegration`<sup>Optional</sup> <a name="RequestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.requestIntegration"></a>

```csharp
public object RequestIntegration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#request_integration BookmarkApp#request_integration}.

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipGroups"></a>

```csharp
public object SkipGroups { get; set; }
```

- *Type:* object

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#skip_groups BookmarkApp#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipUsers"></a>

```csharp
public object SkipUsers { get; set; }
```

- *Type:* object

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#skip_users BookmarkApp#skip_users}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#status BookmarkApp#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.timeouts"></a>

```csharp
public BookmarkAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#timeouts BookmarkApp#timeouts}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.users"></a>

```csharp
public object Users { get; set; }
```

- *Type:* object

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#users BookmarkApp#users}

---

### BookmarkAppTimeouts <a name="BookmarkAppTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new BookmarkAppTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#create BookmarkApp#create}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#read BookmarkApp#read}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#update BookmarkApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#create BookmarkApp#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#read BookmarkApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#update BookmarkApp#update}.

---

### BookmarkAppUsers <a name="BookmarkAppUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new BookmarkAppUsers {
    string Id = null,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.id">Id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.password">Password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.username">Username</a></code> | <code>string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#password BookmarkApp#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#username BookmarkApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### BookmarkAppTimeoutsOutputReference <a name="BookmarkAppTimeoutsOutputReference" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new BookmarkAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BookmarkAppUsersList <a name="BookmarkAppUsersList" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new BookmarkAppUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get"></a>

```csharp
private BookmarkAppUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BookmarkAppUsersOutputReference <a name="BookmarkAppUsersOutputReference" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new BookmarkAppUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



