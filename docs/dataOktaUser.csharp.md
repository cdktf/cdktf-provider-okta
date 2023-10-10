# `data_okta_user`

Refer to the Terraform Registory for docs: [`data_okta_user`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user).

# `dataOktaUser` Submodule <a name="`dataOktaUser` Submodule" id="@cdktf/provider-okta.dataOktaUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaUser <a name="DataOktaUser" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user okta_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUser(Construct Scope, string Id, DataOktaUserConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig">DataOktaUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig">DataOktaUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch">PutSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetCompoundSearchOperator">ResetCompoundSearchOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetDelayReadSeconds">ResetDelayReadSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipRoles">ResetSkipRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSearch` <a name="PutSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch"></a>

```csharp
private void PutSearch(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch.parameter.value"></a>

- *Type:* object

---

##### `ResetCompoundSearchOperator` <a name="ResetCompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetCompoundSearchOperator"></a>

```csharp
private void ResetCompoundSearchOperator()
```

##### `ResetDelayReadSeconds` <a name="ResetDelayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetDelayReadSeconds"></a>

```csharp
private void ResetDelayReadSeconds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipGroups"></a>

```csharp
private void ResetSkipGroups()
```

##### `ResetSkipRoles` <a name="ResetSkipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipRoles"></a>

```csharp
private void ResetSkipRoles()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetUserId"></a>

```csharp
private void ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaUser.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.adminRoles">AdminRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.costCenter">CostCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.customProfileAttributes">CustomProfileAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.department">Department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.division">Division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.employeeNumber">EmployeeNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.groupMemberships">GroupMemberships</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificPrefix">HonorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificSuffix">HonorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.manager">Manager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.managerId">ManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.mobilePhone">MobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.nickName">NickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.postalAddress">PostalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.primaryPhone">PrimaryPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.search">Search</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList">DataOktaUserSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.secondEmail">SecondEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.streetAddress">StreetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userType">UserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.zipCode">ZipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperatorInput">CompoundSearchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSecondsInput">DelayReadSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.searchInput">SearchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRolesInput">SkipRolesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperator">CompoundSearchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSeconds">DelayReadSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroups">SkipGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRoles">SkipRoles</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdminRoles`<sup>Required</sup> <a name="AdminRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.adminRoles"></a>

```csharp
public string[] AdminRoles { get; }
```

- *Type:* string[]

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CostCenter`<sup>Required</sup> <a name="CostCenter" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.costCenter"></a>

```csharp
public string CostCenter { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `CustomProfileAttributes`<sup>Required</sup> <a name="CustomProfileAttributes" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.customProfileAttributes"></a>

```csharp
public string CustomProfileAttributes { get; }
```

- *Type:* string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.department"></a>

```csharp
public string Department { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Division`<sup>Required</sup> <a name="Division" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.division"></a>

```csharp
public string Division { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `EmployeeNumber`<sup>Required</sup> <a name="EmployeeNumber" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.employeeNumber"></a>

```csharp
public string EmployeeNumber { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `GroupMemberships`<sup>Required</sup> <a name="GroupMemberships" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.groupMemberships"></a>

```csharp
public string[] GroupMemberships { get; }
```

- *Type:* string[]

---

##### `HonorificPrefix`<sup>Required</sup> <a name="HonorificPrefix" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificPrefix"></a>

```csharp
public string HonorificPrefix { get; }
```

- *Type:* string

---

##### `HonorificSuffix`<sup>Required</sup> <a name="HonorificSuffix" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificSuffix"></a>

```csharp
public string HonorificSuffix { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `Manager`<sup>Required</sup> <a name="Manager" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.manager"></a>

```csharp
public string Manager { get; }
```

- *Type:* string

---

##### `ManagerId`<sup>Required</sup> <a name="ManagerId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.managerId"></a>

```csharp
public string ManagerId { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `MobilePhone`<sup>Required</sup> <a name="MobilePhone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.mobilePhone"></a>

```csharp
public string MobilePhone { get; }
```

- *Type:* string

---

##### `NickName`<sup>Required</sup> <a name="NickName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.nickName"></a>

```csharp
public string NickName { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.postalAddress"></a>

```csharp
public string PostalAddress { get; }
```

- *Type:* string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `PrimaryPhone`<sup>Required</sup> <a name="PrimaryPhone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.primaryPhone"></a>

```csharp
public string PrimaryPhone { get; }
```

- *Type:* string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.search"></a>

```csharp
public DataOktaUserSearchList Search { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList">DataOktaUserSearchList</a>

---

##### `SecondEmail`<sup>Required</sup> <a name="SecondEmail" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.secondEmail"></a>

```csharp
public string SecondEmail { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.streetAddress"></a>

```csharp
public string StreetAddress { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.zipCode"></a>

```csharp
public string ZipCode { get; }
```

- *Type:* string

---

##### `CompoundSearchOperatorInput`<sup>Optional</sup> <a name="CompoundSearchOperatorInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperatorInput"></a>

```csharp
public string CompoundSearchOperatorInput { get; }
```

- *Type:* string

---

##### `DelayReadSecondsInput`<sup>Optional</sup> <a name="DelayReadSecondsInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSecondsInput"></a>

```csharp
public string DelayReadSecondsInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.searchInput"></a>

```csharp
public object SearchInput { get; }
```

- *Type:* object

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroupsInput"></a>

```csharp
public object SkipGroupsInput { get; }
```

- *Type:* object

---

##### `SkipRolesInput`<sup>Optional</sup> <a name="SkipRolesInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRolesInput"></a>

```csharp
public object SkipRolesInput { get; }
```

- *Type:* object

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `CompoundSearchOperator`<sup>Required</sup> <a name="CompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperator"></a>

```csharp
public string CompoundSearchOperator { get; }
```

- *Type:* string

---

##### `DelayReadSeconds`<sup>Required</sup> <a name="DelayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSeconds"></a>

```csharp
public string DelayReadSeconds { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroups"></a>

```csharp
public object SkipGroups { get; }
```

- *Type:* object

---

##### `SkipRoles`<sup>Required</sup> <a name="SkipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRoles"></a>

```csharp
public object SkipRoles { get; }
```

- *Type:* object

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaUserConfig <a name="DataOktaUserConfig" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompoundSearchOperator = null,
    string DelayReadSeconds = null,
    string Id = null,
    object Search = null,
    object SkipGroups = null,
    object SkipRoles = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.compoundSearchOperator">CompoundSearchOperator</a></code> | <code>string</code> | Search operator used when joining mulitple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.delayReadSeconds">DelayReadSeconds</a></code> | <code>string</code> | Force delay of the user read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#id DataOktaUser#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.search">Search</a></code> | <code>object</code> | search block. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipGroups">SkipGroups</a></code> | <code>object</code> | Do not populate user groups information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipRoles">SkipRoles</a></code> | <code>object</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.userId">UserId</a></code> | <code>string</code> | Retrieve a single user based on their id. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompoundSearchOperator`<sup>Optional</sup> <a name="CompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.compoundSearchOperator"></a>

```csharp
public string CompoundSearchOperator { get; set; }
```

- *Type:* string

Search operator used when joining mulitple search clauses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#compound_search_operator DataOktaUser#compound_search_operator}

---

##### `DelayReadSeconds`<sup>Optional</sup> <a name="DelayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.delayReadSeconds"></a>

```csharp
public string DelayReadSeconds { get; set; }
```

- *Type:* string

Force delay of the user read by N seconds.

Useful when eventual consistency of user information needs to be allowed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#delay_read_seconds DataOktaUser#delay_read_seconds}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#id DataOktaUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.search"></a>

```csharp
public object Search { get; set; }
```

- *Type:* object

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#search DataOktaUser#search}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipGroups"></a>

```csharp
public object SkipGroups { get; set; }
```

- *Type:* object

Do not populate user groups information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#skip_groups DataOktaUser#skip_groups}

---

##### `SkipRoles`<sup>Optional</sup> <a name="SkipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipRoles"></a>

```csharp
public object SkipRoles { get; set; }
```

- *Type:* object

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#skip_roles DataOktaUser#skip_roles}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Retrieve a single user based on their id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#user_id DataOktaUser#user_id}

---

### DataOktaUserSearch <a name="DataOktaUserSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUserSearch {
    string Comparison = null,
    string Expression = null,
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#comparison DataOktaUser#comparison}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.expression">Expression</a></code> | <code>string</code> | A raw search expression string. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.name">Name</a></code> | <code>string</code> | Property name to search for. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#value DataOktaUser#value}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#comparison DataOktaUser#comparison}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

A raw search expression string.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#expression DataOktaUser#expression}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Property name to search for.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#name DataOktaUser#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/user#value DataOktaUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaUserSearchList <a name="DataOktaUserSearchList" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUserSearchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get"></a>

```csharp
private DataOktaUserSearchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOktaUserSearchOutputReference <a name="DataOktaUserSearchOutputReference" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaUserSearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



