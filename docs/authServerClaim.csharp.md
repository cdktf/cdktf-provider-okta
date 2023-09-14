# `okta_auth_server_claim`

Refer to the Terraform Registory for docs: [`okta_auth_server_claim`](https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim).

# `authServerClaim` Submodule <a name="`authServerClaim` Submodule" id="@cdktf/provider-okta.authServerClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerClaim <a name="AuthServerClaim" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim okta_auth_server_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AuthServerClaim(Construct Scope, string Id, AuthServerClaimConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig">AuthServerClaimConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig">AuthServerClaimConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetAlwaysIncludeInToken">ResetAlwaysIncludeInToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetGroupFilterType">ResetGroupFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAlwaysIncludeInToken` <a name="ResetAlwaysIncludeInToken" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetAlwaysIncludeInToken"></a>

```csharp
private void ResetAlwaysIncludeInToken()
```

##### `ResetGroupFilterType` <a name="ResetGroupFilterType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetGroupFilterType"></a>

```csharp
private void ResetGroupFilterType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetValueType"></a>

```csharp
private void ResetValueType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AuthServerClaim.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AuthServerClaim.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AuthServerClaim.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInTokenInput">AlwaysIncludeInTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerIdInput">AuthServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimTypeInput">ClaimTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterTypeInput">GroupFilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInToken">AlwaysIncludeInToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerId">AuthServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimType">ClaimType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterType">GroupFilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AlwaysIncludeInTokenInput`<sup>Optional</sup> <a name="AlwaysIncludeInTokenInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInTokenInput"></a>

```csharp
public object AlwaysIncludeInTokenInput { get; }
```

- *Type:* object

---

##### `AuthServerIdInput`<sup>Optional</sup> <a name="AuthServerIdInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerIdInput"></a>

```csharp
public string AuthServerIdInput { get; }
```

- *Type:* string

---

##### `ClaimTypeInput`<sup>Optional</sup> <a name="ClaimTypeInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimTypeInput"></a>

```csharp
public string ClaimTypeInput { get; }
```

- *Type:* string

---

##### `GroupFilterTypeInput`<sup>Optional</sup> <a name="GroupFilterTypeInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterTypeInput"></a>

```csharp
public string GroupFilterTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `AlwaysIncludeInToken`<sup>Required</sup> <a name="AlwaysIncludeInToken" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInToken"></a>

```csharp
public object AlwaysIncludeInToken { get; }
```

- *Type:* object

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerId"></a>

```csharp
public string AuthServerId { get; }
```

- *Type:* string

---

##### `ClaimType`<sup>Required</sup> <a name="ClaimType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimType"></a>

```csharp
public string ClaimType { get; }
```

- *Type:* string

---

##### `GroupFilterType`<sup>Required</sup> <a name="GroupFilterType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterType"></a>

```csharp
public string GroupFilterType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerClaimConfig <a name="AuthServerClaimConfig" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AuthServerClaimConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthServerId,
    string ClaimType,
    string Name,
    string Value,
    object AlwaysIncludeInToken = null,
    string GroupFilterType = null,
    string Id = null,
    string[] Scopes = null,
    string Status = null,
    string ValueType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.authServerId">AuthServerId</a></code> | <code>string</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.claimType">ClaimType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#claim_type AuthServerClaim#claim_type}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.name">Name</a></code> | <code>string</code> | Auth server claim name. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#value AuthServerClaim#value}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.alwaysIncludeInToken">AlwaysIncludeInToken</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#always_include_in_token AuthServerClaim#always_include_in_token}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.groupFilterType">GroupFilterType</a></code> | <code>string</code> | Required when value_type is GROUPS. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#id AuthServerClaim#id}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Auth server claim list of scopes. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#status AuthServerClaim#status}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.valueType">ValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#value_type AuthServerClaim#value_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.authServerId"></a>

```csharp
public string AuthServerId { get; set; }
```

- *Type:* string

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#auth_server_id AuthServerClaim#auth_server_id}

---

##### `ClaimType`<sup>Required</sup> <a name="ClaimType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.claimType"></a>

```csharp
public string ClaimType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#claim_type AuthServerClaim#claim_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Auth server claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#name AuthServerClaim#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#value AuthServerClaim#value}.

---

##### `AlwaysIncludeInToken`<sup>Optional</sup> <a name="AlwaysIncludeInToken" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.alwaysIncludeInToken"></a>

```csharp
public object AlwaysIncludeInToken { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#always_include_in_token AuthServerClaim#always_include_in_token}.

---

##### `GroupFilterType`<sup>Optional</sup> <a name="GroupFilterType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.groupFilterType"></a>

```csharp
public string GroupFilterType { get; set; }
```

- *Type:* string

Required when value_type is GROUPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#group_filter_type AuthServerClaim#group_filter_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#id AuthServerClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Auth server claim list of scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#scopes AuthServerClaim#scopes}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#status AuthServerClaim#status}.

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/auth_server_claim#value_type AuthServerClaim#value_type}.

---



