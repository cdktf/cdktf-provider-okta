# `dataOktaUsers` Submodule <a name="`dataOktaUsers` Submodule" id="@cdktf/provider-okta.dataOktaUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaUsers <a name="DataOktaUsers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/d/users okta_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUsers(Construct Scope, string Id, DataOktaUsersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig">DataOktaUsersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig">DataOktaUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.putSearch">PutSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetCompoundSearchOperator">ResetCompoundSearchOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetDelayReadSeconds">ResetDelayReadSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeGroups">ResetIncludeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeRoles">ResetIncludeRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSearch` <a name="PutSearch" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.putSearch"></a>

```csharp
private void PutSearch(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.putSearch.parameter.value"></a>

- *Type:* object

---

##### `ResetCompoundSearchOperator` <a name="ResetCompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetCompoundSearchOperator"></a>

```csharp
private void ResetCompoundSearchOperator()
```

##### `ResetDelayReadSeconds` <a name="ResetDelayReadSeconds" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetDelayReadSeconds"></a>

```csharp
private void ResetDelayReadSeconds()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeGroups` <a name="ResetIncludeGroups" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeGroups"></a>

```csharp
private void ResetIncludeGroups()
```

##### `ResetIncludeRoles` <a name="ResetIncludeRoles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeRoles"></a>

```csharp
private void ResetIncludeRoles()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetSearch"></a>

```csharp
private void ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaUsers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaUsers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaUsers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.search">Search</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList">DataOktaUsersSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList">DataOktaUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperatorInput">CompoundSearchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSecondsInput">DelayReadSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroupsInput">IncludeGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRolesInput">IncludeRolesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.searchInput">SearchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperator">CompoundSearchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSeconds">DelayReadSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroups">IncludeGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRoles">IncludeRoles</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.search"></a>

```csharp
public DataOktaUsersSearchList Search { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList">DataOktaUsersSearchList</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.users"></a>

```csharp
public DataOktaUsersUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList">DataOktaUsersUsersList</a>

---

##### `CompoundSearchOperatorInput`<sup>Optional</sup> <a name="CompoundSearchOperatorInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperatorInput"></a>

```csharp
public string CompoundSearchOperatorInput { get; }
```

- *Type:* string

---

##### `DelayReadSecondsInput`<sup>Optional</sup> <a name="DelayReadSecondsInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSecondsInput"></a>

```csharp
public string DelayReadSecondsInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeGroupsInput`<sup>Optional</sup> <a name="IncludeGroupsInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroupsInput"></a>

```csharp
public object IncludeGroupsInput { get; }
```

- *Type:* object

---

##### `IncludeRolesInput`<sup>Optional</sup> <a name="IncludeRolesInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRolesInput"></a>

```csharp
public object IncludeRolesInput { get; }
```

- *Type:* object

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.searchInput"></a>

```csharp
public object SearchInput { get; }
```

- *Type:* object

---

##### `CompoundSearchOperator`<sup>Required</sup> <a name="CompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperator"></a>

```csharp
public string CompoundSearchOperator { get; }
```

- *Type:* string

---

##### `DelayReadSeconds`<sup>Required</sup> <a name="DelayReadSeconds" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSeconds"></a>

```csharp
public string DelayReadSeconds { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeGroups`<sup>Required</sup> <a name="IncludeGroups" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroups"></a>

```csharp
public object IncludeGroups { get; }
```

- *Type:* object

---

##### `IncludeRoles`<sup>Required</sup> <a name="IncludeRoles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRoles"></a>

```csharp
public object IncludeRoles { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaUsersConfig <a name="DataOktaUsersConfig" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUsersConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompoundSearchOperator = null,
    string DelayReadSeconds = null,
    string GroupId = null,
    string Id = null,
    object IncludeGroups = null,
    object IncludeRoles = null,
    object Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.compoundSearchOperator">CompoundSearchOperator</a></code> | <code>string</code> | Search operator used when joining mulitple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.delayReadSeconds">DelayReadSeconds</a></code> | <code>string</code> | Force delay of the users read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.groupId">GroupId</a></code> | <code>string</code> | Find users based on group membership using the id of the group. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#id DataOktaUsers#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeGroups">IncludeGroups</a></code> | <code>object</code> | Fetch group memberships for each user. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeRoles">IncludeRoles</a></code> | <code>object</code> | Fetch user roles for each user. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.search">Search</a></code> | <code>object</code> | search block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompoundSearchOperator`<sup>Optional</sup> <a name="CompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.compoundSearchOperator"></a>

```csharp
public string CompoundSearchOperator { get; set; }
```

- *Type:* string

Search operator used when joining mulitple search clauses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#compound_search_operator DataOktaUsers#compound_search_operator}

---

##### `DelayReadSeconds`<sup>Optional</sup> <a name="DelayReadSeconds" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.delayReadSeconds"></a>

```csharp
public string DelayReadSeconds { get; set; }
```

- *Type:* string

Force delay of the users read by N seconds.

Useful when eventual consistency of users information needs to be allowed for.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#delay_read_seconds DataOktaUsers#delay_read_seconds}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Find users based on group membership using the id of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#group_id DataOktaUsers#group_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#id DataOktaUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeGroups`<sup>Optional</sup> <a name="IncludeGroups" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeGroups"></a>

```csharp
public object IncludeGroups { get; set; }
```

- *Type:* object

Fetch group memberships for each user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#include_groups DataOktaUsers#include_groups}

---

##### `IncludeRoles`<sup>Optional</sup> <a name="IncludeRoles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeRoles"></a>

```csharp
public object IncludeRoles { get; set; }
```

- *Type:* object

Fetch user roles for each user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#include_roles DataOktaUsers#include_roles}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.search"></a>

```csharp
public object Search { get; set; }
```

- *Type:* object

search block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#search DataOktaUsers#search}

---

### DataOktaUsersSearch <a name="DataOktaUsersSearch" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUsersSearch {
    string Comparison = null,
    string Expression = null,
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#comparison DataOktaUsers#comparison}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.expression">Expression</a></code> | <code>string</code> | A raw search expression string. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.name">Name</a></code> | <code>string</code> | Property name to search for. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#value DataOktaUsers#value}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#comparison DataOktaUsers#comparison}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

A raw search expression string.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#expression DataOktaUsers#expression}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Property name to search for.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#name DataOktaUsers#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/users#value DataOktaUsers#value}.

---

### DataOktaUsersUsers <a name="DataOktaUsersUsers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUsersUsers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaUsersSearchList <a name="DataOktaUsersSearchList" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUsersSearchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.get"></a>

```csharp
private DataOktaUsersSearchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOktaUsersSearchOutputReference <a name="DataOktaUsersSearchOutputReference" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUsersSearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOktaUsersUsersList <a name="DataOktaUsersUsersList" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUsersUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.get"></a>

```csharp
private DataOktaUsersUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOktaUsersUsersOutputReference <a name="DataOktaUsersUsersOutputReference" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUsersUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.adminRoles">AdminRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.costCenter">CostCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.customProfileAttributes">CustomProfileAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.department">Department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.division">Division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.employeeNumber">EmployeeNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.groupMemberships">GroupMemberships</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificPrefix">HonorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificSuffix">HonorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.manager">Manager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.managerId">ManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.mobilePhone">MobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.nickName">NickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.postalAddress">PostalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.primaryPhone">PrimaryPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.secondEmail">SecondEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.streetAddress">StreetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.userType">UserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.zipCode">ZipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers">DataOktaUsersUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminRoles`<sup>Required</sup> <a name="AdminRoles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.adminRoles"></a>

```csharp
public string[] AdminRoles { get; }
```

- *Type:* string[]

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CostCenter`<sup>Required</sup> <a name="CostCenter" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.costCenter"></a>

```csharp
public string CostCenter { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `CustomProfileAttributes`<sup>Required</sup> <a name="CustomProfileAttributes" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.customProfileAttributes"></a>

```csharp
public string CustomProfileAttributes { get; }
```

- *Type:* string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.department"></a>

```csharp
public string Department { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Division`<sup>Required</sup> <a name="Division" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.division"></a>

```csharp
public string Division { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `EmployeeNumber`<sup>Required</sup> <a name="EmployeeNumber" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.employeeNumber"></a>

```csharp
public string EmployeeNumber { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `GroupMemberships`<sup>Required</sup> <a name="GroupMemberships" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.groupMemberships"></a>

```csharp
public string[] GroupMemberships { get; }
```

- *Type:* string[]

---

##### `HonorificPrefix`<sup>Required</sup> <a name="HonorificPrefix" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificPrefix"></a>

```csharp
public string HonorificPrefix { get; }
```

- *Type:* string

---

##### `HonorificSuffix`<sup>Required</sup> <a name="HonorificSuffix" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificSuffix"></a>

```csharp
public string HonorificSuffix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `Manager`<sup>Required</sup> <a name="Manager" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.manager"></a>

```csharp
public string Manager { get; }
```

- *Type:* string

---

##### `ManagerId`<sup>Required</sup> <a name="ManagerId" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.managerId"></a>

```csharp
public string ManagerId { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `MobilePhone`<sup>Required</sup> <a name="MobilePhone" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.mobilePhone"></a>

```csharp
public string MobilePhone { get; }
```

- *Type:* string

---

##### `NickName`<sup>Required</sup> <a name="NickName" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.nickName"></a>

```csharp
public string NickName { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.postalAddress"></a>

```csharp
public string PostalAddress { get; }
```

- *Type:* string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `PrimaryPhone`<sup>Required</sup> <a name="PrimaryPhone" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.primaryPhone"></a>

```csharp
public string PrimaryPhone { get; }
```

- *Type:* string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `SecondEmail`<sup>Required</sup> <a name="SecondEmail" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.secondEmail"></a>

```csharp
public string SecondEmail { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.streetAddress"></a>

```csharp
public string StreetAddress { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.zipCode"></a>

```csharp
public string ZipCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.internalValue"></a>

```csharp
public DataOktaUsersUsers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers">DataOktaUsersUsers</a>

---



