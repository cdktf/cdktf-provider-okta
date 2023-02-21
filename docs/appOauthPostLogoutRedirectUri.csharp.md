# `appOauthPostLogoutRedirectUri` Submodule <a name="`appOauthPostLogoutRedirectUri` Submodule" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppOauthPostLogoutRedirectUri <a name="AppOauthPostLogoutRedirectUri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_post_logout_redirect_uri okta_app_oauth_post_logout_redirect_uri}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthPostLogoutRedirectUri(Construct Scope, string Id, AppOauthPostLogoutRedirectUriConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig">AppOauthPostLogoutRedirectUriConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig">AppOauthPostLogoutRedirectUriConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppOauthPostLogoutRedirectUri.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppOauthPostLogoutRedirectUri.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppOauthPostLogoutRedirectUri.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uri">Uri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppOauthPostLogoutRedirectUriConfig <a name="AppOauthPostLogoutRedirectUriConfig" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthPostLogoutRedirectUriConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string Uri,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.appId">AppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_post_logout_redirect_uri#app_id AppOauthPostLogoutRedirectUri#app_id}. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.uri">Uri</a></code> | <code>string</code> | Post Logout Redirect URI to append to Okta OIDC application. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_post_logout_redirect_uri#app_id AppOauthPostLogoutRedirectUri#app_id}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Post Logout Redirect URI to append to Okta OIDC application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_post_logout_redirect_uri#uri AppOauthPostLogoutRedirectUri#uri}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



